'use client';

import { Formik, Form, Field, FormikConsumer } from 'formik';
import { useState } from 'react';
import { CamperFilters, EquipmentKey } from '@/types/filters';
import { getCampers } from '@/lib/api';
import CamperList from '../CamperList/CamperList';
import { Camper } from '@/types/camper';
import toast from 'react-hot-toast';
import css from './AllFilters.module.css';
import { FieldProps } from 'formik';

export interface FilterFormValues {
  location: string;
  form: string;
  equipment: EquipmentKey[];
}

const initialValues: FilterFormValues = {
  location: '',
  form: '',
  equipment: [],
};

type Props = {
  initCampers: Camper[];
  initTotal: number;
  initPage: number;
  allLocations: string[];
};

const AllFilters = ({
  initCampers,
  initTotal,
  initPage,
  allLocations,
}: Props) => {
  const [campers, setCampers] = useState<Camper[]>(initCampers);
  const [page, setPage] = useState<number>(initPage);
  const [total, setTotal] = useState<number>(initTotal);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [currentFilters, setCurrentFilters] = useState<CamperFilters>({});
  ///////////////////////////////////////////////////////////////////////////////////////
  const equipmentOptions: {
    key: EquipmentKey;
    label: string;
    icon: string;
  }[] = [
    { key: 'AC', label: 'AC', icon: 'AC' },
    { key: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
    { key: 'bathroom', label: 'Bathroom', icon: 'bathroom' },
    { key: 'TV', label: 'TV', icon: 'TV' },
    { key: 'radio', label: 'Radio', icon: 'radio' },
    { key: 'refrigerator', label: 'Fridge', icon: 'refrigerator' },
    // { key: 'microwave', label: 'Microwave', icon: 'microwave' }, // мають інше svg
    // { key: 'gas', label: 'Gas', icon: 'gas' },
    // { key: 'water', label: 'Water', icon: 'water' },
  ];

  ////////////////////////////////////////////////////////////////////////////////////
  const handleSubmit = async (values: FilterFormValues) => {
    setLoading(true);
    setError(null);

    const filters: CamperFilters = {};
    if (values.location) filters.location = values.location;
    if (values.form) filters.form = values.form;
    values.equipment.forEach(key => (filters[key] = true));

    // скидання попереднього запиту
    setCampers([]);
    setPage(1);

    try {
      const { campers: newCampers, total: newTotal } = await getCampers(
        filters,
        1,
        4
      );
      if (!newCampers.length) {
        setError('Incorrect filter combination. Try again.');
      }
      setCampers(newCampers);
      setTotal(newTotal);
      setCurrentFilters(filters);
    } catch {
      toast.error('Incorrect filter combination. Try again!!!!!!!!');
      setError('An error occurred. Returning the full collection.');
      setCampers(initCampers);
      setTotal(initTotal);
    } finally {
      setLoading(false);
    }
  };

  //

  const handleLoadMore = async () => {
    const next = page + 1;
    setLoading(true);
    setError(null);
    try {
      const { campers: more, total: newTotal } = await getCampers(
        currentFilters,
        next,
        4
      );
      setCampers(prev => [...prev, ...more]);
      setPage(next);
      setTotal(newTotal);
    } catch {
      setError('You have viewed all the data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={css.container}>
      <aside className={css.filters}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            {/* -----  location   ------ */}
            <div className={css.locationBox}>
              <label className={css.locationTitle}>Location</label>
              <svg width="32" height="32" className={css.iconMap}>
                <use href="/icons.svg#icon-Map"></use>
              </svg>

              <Field as="select" name="location" className={css.locationValue}>
                <option value="" className={css.locationCity}>
                  City
                </option>
                {allLocations.map(location => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Field>
            </div>
            <div className={css.filtersBox}>
              <h3 className={css.filtersBoxTitle}>Filters</h3>

              {/* -----   equipment  ----- */}

              {/* //////////////////////////////////////////////////////////////////////// */}
              <h4 className={css.filtersTitle}>Vehicle equipment</h4>
              <hr className={css.line} />

              <div className={css.equipmentGrid}>
                {equipmentOptions.map(item => (
                  <FormikConsumer key={item.key}>
                    {({ values, setFieldValue }) => {
                      const isActive = values.equipment.includes(item.key);

                      return (
                        <button
                          type="button"
                          className={`${css.equipmentCard} ${isActive ? css.active : ''}`}
                          onClick={() => {
                            const newArr = isActive
                              ? values.equipment.filter(
                                  (value: string) => value !== item.key
                                )
                              : [...values.equipment, item.key];

                            setFieldValue('equipment', newArr);
                          }}
                        >
                          <svg
                            width="32"
                            height="32"
                            className={css.equipmentSvg}
                          >
                            <use href={`/icons.svg#icon-${item.icon}`} />
                          </svg>
                          <span className={css.equipmentLabel}>
                            {item.label}
                          </span>
                        </button>
                      );
                    }}
                  </FormikConsumer>
                ))}
              </div>

              {/* //////////////////////////////////////////////////////////////////////// */}

              {/* -----  type------   */}

              {/* //////////////////////////////////////////////////////////////////////// */}
              <h4 className={css.filtersTitle}>Vehicle type</h4>
              <hr className={css.line} />

              <div className={css.typeGrid}>
                {[
                  { value: 'van', label: 'Van', icon: 'van' },
                  {
                    value: 'fullyIntegrated',
                    label: 'Fully Integrated',
                    icon: 'fully',
                  },
                  { value: 'panelTruck', label: 'Alcove', icon: 'alcove' },
                ].map(type => (
                  <Field name="form" key={type.value}>
                    {({ form }: FieldProps) => {
                      const isActive = form.values.form === type.value;
                      return (
                        <button
                          type="button"
                          className={`${css.typeCard} ${isActive ? css.active : ''}`}
                          onClick={() => {
                            const newValue = isActive ? '' : type.value;
                            form.setFieldValue('form', newValue);
                          }}
                        >
                          <svg width="32" height="32">
                            <use href={`/icons.svg#icon-${type.icon}`} />
                          </svg>
                          <span className={css.typeLabel}>{type.label}</span>
                        </button>
                      );
                    }}
                  </Field>
                ))}
              </div>

              {/* //////////////////////////////////////////////////////////////////////// */}
            </div>

            <button type="submit" className={css.btnSearch}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </Form>
        </Formik>
      </aside>
      <div className={css.catalog}>
        {error && <div className="error">{error}</div>}
        <CamperList campers={campers} />
        {/* перенести кнопку у CamperList - ??? */}
        {campers.length < total && (
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className={css.btnLoadMore}
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    </section>
  );
};
export default AllFilters;
