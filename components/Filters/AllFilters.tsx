"use client";

import { Formik, Form, Field, FormikHelpers } from "formik";
import { useState } from "react";
import { CamperFilters, EquipmentKey } from "@/types/filters";
import { getCampers } from "@/lib/api";
import CamperList from "../CamperList/CamperList";
import { Camper } from "@/types/camper";
import toast from "react-hot-toast";
import css from "./AllFilters.module.css";

export interface FilterFormValues {
  location: string;
  form: string;
  equipment: EquipmentKey[];
  transmission: "automatic" | "manual";
  engine: "diesel" | "petrol" | "hybrid";
}

const initialValues: FilterFormValues = {
  location: "",
  form: "",
  equipment: [],
  transmission: "automatic",
  engine: "diesel",
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

  const handleSubmit = async (
    values: FilterFormValues,
    actions: FormikHelpers<FilterFormValues>
  ) => {
    setLoading(true);
    setError(null);

    const filters: CamperFilters = {};
    if (values.location) filters.location = values.location;
    if (values.form) filters.form = values.form;
    if (values.transmission) filters.transmission = values.transmission;
    if (values.engine) filters.engine = values.engine;
    values.equipment.forEach((key) => (filters[key] = true));

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
        setError("Incorrect filter combination. TTTTTTTTTry again.");
      }
      setCampers(newCampers);
      setTotal(newTotal);
      setCurrentFilters(filters);

      actions.resetForm(); //скидання форми ??????   де зробити??????
    } catch {
      toast.error("Incorrect filter combination. Try again!!!!!!!!");
      setError("An error occurred. Returning the full collection.");
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
      setCampers((prev) => [...prev, ...more]);
      setPage(next);
      setTotal(newTotal);
    } catch {
      setError("You have viewed all the data.");
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
              <Field as="select" name="location" className={css.locationValue}>
                <option value="">🗺 All locations</option>
                {allLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Field>
            </div>
            <div className={css.filtersBox}>
              <h3 className={css.filtersBoxTitle}>Filters</h3>
              {/* -----   equipment  ----- */}
              <div>
                <div className={css.filtersEquipBox}>
                  <h4 className={css.filtersEquipBoxTitle}>
                    Vehicle equipment
                  </h4>
                  <hr className={css.line} />
                  <div className={css.equipmentBox}>
                    {/* EQUIPMENT (checkbox) */}
                    <div className={css.equipmentCheckbox}>
                      <label className={css.equipmentValue}>
                        <Field type="checkbox" name="equipment" value="AC" /> AC
                      </label>
                      <label className={css.equipmentValue}>
                        <Field
                          type="checkbox"
                          name="equipment"
                          value="kitchen"
                        />
                        Kitchen
                      </label>
                      <label className={css.equipmentValue}>
                        <Field
                          type="checkbox"
                          name="equipment"
                          value="bathroom"
                        />
                        Bathroom
                      </label>
                      <label className={css.equipmentValue}>
                        <Field type="checkbox" name="equipment" value="TV" /> TV
                      </label>
                      <label className={css.equipmentValue}>
                        <Field type="checkbox" name="equipment" value="radio" />{" "}
                        Radio
                      </label>
                    </div>

                    {/* TRANSMISSION (radio) */}
                    <div className={css.equipmentCheckbox}>
                      <p>🚗 Transmission:</p>
                      <label className={css.equipmentValue}>
                        <Field
                          type="radio"
                          name="transmission"
                          value="automatic"
                        />
                        Automatic
                      </label>
                      <label className={css.equipmentValue}>
                        <Field
                          type="radio"
                          name="transmission"
                          value="manual"
                        />
                        Manual
                      </label>
                    </div>
                    {/* ENGINE (radio) */}
                    <div className={css.equipmentCheckbox}>
                      <p>⛽ Engine:</p>
                      <label className={css.equipmentValue}>
                        <Field type="radio" name="engine" value="diesel" />{" "}
                        Diesel
                      </label>
                      <label className={css.equipmentValue}>
                        <Field type="radio" name="engine" value="petrol" />{" "}
                        Petrol
                      </label>
                      <label className={css.equipmentValue}>
                        <Field type="radio" name="engine" value="hybrid" />{" "}
                        Hybrid
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* -----  type------   */}
              <div>
                <h3 className={css.filtersEquipBoxTitle}>Vehicle type</h3>
                <hr className={css.line} />
                <div className={css.equipmentType}>
                  <label className={css.equipmentValue}>
                    <Field type="radio" name="form" value="alcove" />
                    Alcove
                  </label>
                  <label className={css.equipmentValue}>
                    <Field type="radio" name="form" value="panelTruck" />
                    Panel Truck
                  </label>
                  <label className={css.equipmentValue}>
                    <Field type="radio" name="form" value="fullyIntegrated" />
                    Fully Integrated
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className={css.btnSearch}>
              {loading ? "Searching..." : "Search"}
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
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
};
export default AllFilters;
