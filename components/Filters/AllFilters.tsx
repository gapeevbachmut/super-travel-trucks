"use client";

import { Formik, Form, Field, FormikHelpers } from "formik";
import { useState, useMemo } from "react";
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

type Props = { initCampers: Camper[]; initTotal: number; initPage: number };

const AllFilters = ({ initCampers, initTotal, initPage }: Props) => {
  const [campers, setCampers] = useState<Camper[]>(initCampers);
  const [page, setPage] = useState<number>(initPage);
  const [total, setTotal] = useState<number>(initTotal);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const locations = Array.from(
    new Set(campers.map((camper) => camper.location))
  );
  //------------------           or
  // const locations = useMemo(
  //   () => Array.from(new Set(campers.map((c) => c.location).filter(Boolean))),
  //   [campers]
  // );

  const [currentFilters, setCurrentFilters] = useState<CamperFilters>({});

  //

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

    // скидання
    setCampers([]);
    setPage(1);

    try {
      const { campers: newCampers, total: newTotal } = await getCampers(
        filters,
        1,
        4
      );
      if (!newCampers.length) {
        setError("Incorrect filter combination. Try again.");
      }
      setCampers(newCampers);
      setTotal(newTotal);
      setCurrentFilters(filters);
    } catch {
      toast.error("Incorrect filter combination. Try again.");
      setError("An error occurred. Returning the full collection.");
      setCampers(initCampers);
      setTotal(initTotal);
      actions.resetForm(); //скидання форми ??????   де зробити??????
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
          <Form>
            {/* -----  location   ------ */}
            <div>
              <label>Location</label>
              <Field as="select" name="location">
                <option value="">All locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Field>
            </div>
            {/* ------  equipment ------ */}
            <div>
              {/* EQUIPMENT BOOLEAN */}
              <div>
                <p>Equipment</p>
                <label>
                  <Field type="checkbox" name="equipment" value="AC" /> AC
                </label>
                <label>
                  <Field type="checkbox" name="equipment" value="kitchen" />
                  Kitchen
                </label>
                <label>
                  <Field type="checkbox" name="equipment" value="bathroom" />
                  Bathroom
                </label>
                <label>
                  <Field type="checkbox" name="equipment" value="TV" /> TV
                </label>
                <label>
                  <Field type="checkbox" name="equipment" value="radio" /> Radio
                </label>
              </div>
              {/* TRANSMISSION (radio) */}
              <div>
                <p>Transmission</p>
                <label>
                  <Field type="radio" name="transmission" value="automatic" />
                  Automatic
                </label>
                <label>
                  <Field type="radio" name="transmission" value="manual" />
                  Manual
                </label>
              </div>
              {/* ENGINE (radio) */}
              <div>
                <p>Engine</p>
                <label>
                  <Field type="radio" name="engine" value="diesel" /> Diesel
                </label>
                <label>
                  <Field type="radio" name="engine" value="petrol" /> Petrol
                </label>
                <label>
                  <Field type="radio" name="engine" value="hybrid" /> Hybrid
                </label>
              </div>
            </div>
            {/* -----  type------   */}
            <div>
              <p>Type</p>
              <label>
                <Field type="radio" name="form" value="alcove" />
                Alcove
              </label>
              <label>
                <Field type="radio" name="form" value="panelTruck" />
                Panel Truck
              </label>
              <label>
                <Field type="radio" name="form" value="fullyIntegrated" />
                Fully Integrated
              </label>
            </div>
            <button type="submit">
              {loading ? "Searching..." : "Apply filters"}
            </button>
          </Form>
        </Formik>
      </aside>
      <div className={css.catalog}>
        {error && <div className="error">{error}</div>}
        <CamperList campers={campers} />
        {campers.length < total && (
          <button onClick={handleLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
};
export default AllFilters;
