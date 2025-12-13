'use client';

import { Formik, Form, Field, FormikConsumer, FieldProps } from 'formik';
import { CamperFilters, EquipmentKey } from '@/types/filters';
import css from './AllFilters.module.css';

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
  allLocations: string[];
  onSubmit: (filters: CamperFilters) => void;
  loading: boolean;
};

const AllFilters = ({ allLocations, onSubmit, loading }: Props) => {
  const equipmentOptions = [
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

  const handleSubmit = (values: FilterFormValues) => {
    const filters: CamperFilters = {};

    if (values.location) filters.location = values.location;
    if (values.form) filters.form = values.form;
    values.equipment.forEach(key => (filters[key] = true));

    onSubmit(filters);
  };

  return (
    // <section className={css.container}>
    <aside className={css.filters}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          {/* Location */}
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
            {/* Equipment */}
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
                        // className={isActive ? css.active : ''}
                        onClick={() => {
                          const updated = isActive
                            ? values.equipment.filter(
                                (value: string) => value !== item.key
                              )
                            : [...values.equipment, item.key];
                          setFieldValue('equipment', updated);
                        }}
                      >
                        <svg
                          width="32"
                          height="32"
                          className={css.equipmentSvg}
                        >
                          <use href={`/icons.svg#icon-${item.icon}`} />
                        </svg>

                        {/* {item.label} */}
                        <span className={css.equipmentLabel}>{item.label}</span>
                      </button>
                    );
                  }}
                </FormikConsumer>
              ))}
            </div>
            {/* Type */}
            <h4 className={css.filtersTitle}>Vehicle type</h4>{' '}
            <hr className={css.line} />
            <div className={css.typeGrid}>
              {[
                { value: 'panelTruck', label: 'Van', icon: 'van' },
                {
                  value: 'fullyIntegrated',
                  label: 'Fully Integrated',
                  icon: 'fully',
                },
                { value: 'alcove', label: 'Alcove', icon: 'alcove' },
              ].map(type => (
                <Field name="form" key={type.value}>
                  {({ form }: FieldProps) => {
                    const isActive = form.values.form === type.value;
                    return (
                      <button
                        type="button"
                        className={`${css.typeCard} ${isActive ? css.active : ''}`}
                        // className={isActive ? css.active : ''}
                        onClick={() =>
                          form.setFieldValue('form', isActive ? '' : type.value)
                        }
                      >
                        <svg width="32" height="32">
                          <use href={`/icons.svg#icon-${type.icon}`} />
                        </svg>
                        <span className={css.typeLabel}>{type.label}</span>

                        {/* {type.label} */}
                      </button>
                    );
                  }}
                </Field>
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading} className={css.btnSearch}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </Form>
      </Formik>
    </aside>
    // </section>
  );
};

export default AllFilters;
