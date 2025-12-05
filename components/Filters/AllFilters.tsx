"use client";

import { Formik, Form, Field, FormikHelpers } from "formik";
import { useState } from "react";
import { CamperFilters, EquipmentKey } from "@/type/filters";
import { getCampers } from "@/lib/api";
import CamperList from "../CamperList/CamperList";
import { Camper } from "@/type/camper";
import toast from "react-hot-toast";

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
  transmission: "manual",
  engine: "petrol",
};

type Props = { campers: Camper[]; locations: string[] };

const AllFilters = ({ campers, locations }: Props) => {
  const [filtered, setFiltered] = useState<Camper[]>(campers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

    values.equipment.forEach((item) => {
      filters[item] = true; // AC → AC: true
    });
    try {
      const result = await getCampers(filters);
      setFiltered(result.campers);
    } catch {
      toast.error("Incorrect filter combination. Try again.");

      setFiltered(campers);
    } finally {
      setLoading(false);
      actions.resetForm();
    }
  };
  return (
    <section>
      <div>
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
                  <Field type="checkbox" name="equipment" value="kitchen" />{" "}
                  Kitchen
                </label>
                <label>
                  <Field type="checkbox" name="equipment" value="bathroom" />{" "}
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
                  <Field type="radio" name="transmission" value="automatic" />{" "}
                  Automatic
                </label>
                <label>
                  <Field type="radio" name="transmission" value="manual" />{" "}
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
      </div>
      {!error && <CamperList campers={filtered} />}
      {/* <CamperList campers={filtered} /> */}
    </section>
  );
};
export default AllFilters;
