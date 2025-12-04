"use client";

import { getCampers } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import FilterLocation from "./FilterLocation";
import CamperList from "../CamperList/CamperList";
import FilterType from "./FilterType";
import FilterEquipment from "./FilterEquipment";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useId } from "react";

interface OrderFormValues {
  username: string;
  email: string;
  deliveryTime: string; //location - Селект
  restrictions: string[]; // equipment - Чекбокси
  delivery: string; //  type  -  Радіокнопки
}

const initialValues: OrderFormValues = {
  username: "",
  email: "",
  deliveryTime: "",
  restrictions: [],
  delivery: "pickup",
};

const AllFilters = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const debouncedSearch = useDebouncedCallback(setSearchLocation, 300);
  const [valueType, setValueType] = useState("");
  const [equipmentFilters, setEquipmentFilters] = useState({
    AC: false,
    kitchen: false,
    bathroom: false,
    TV: false,
    radio: false,
    transmission: "",
    engine: "",
  });

  const { data } = useQuery({
    queryKey: ["campers", searchLocation, valueType, equipmentFilters],
    queryFn: () =>
      getCampers({
        location: searchLocation || undefined,
        form: valueType || undefined,
        AC: equipmentFilters.AC || undefined,
        kitchen: equipmentFilters.kitchen || undefined,
        bathroom: equipmentFilters.bathroom || undefined,
        TV: equipmentFilters.TV || undefined,
        radio: equipmentFilters.radio || undefined,
        transmission: equipmentFilters.transmission || undefined,
        engine: equipmentFilters.engine || undefined,
      }),
    placeholderData: keepPreviousData,
  });

  const fieldId = useId();

  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>
  ) => {
    console.log("Order data:", values);
    actions.resetForm();
  };
  return (
    <>
      <section>
        <FilterLocation
          valueLocation={searchLocation}
          onSearch={debouncedSearch}
        />
        <FilterEquipment
          valueEquipment={equipmentFilters}
          onSearch={setEquipmentFilters}
        />
        <FilterType value={valueType} onSearch={setValueType} />
        <CamperList campers={data?.campers || []} />
        <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <Field type="text" name="username" />
              <Field type="email" name="email" />
              {/* -----  location   ------ */}
              <div>
                <label htmlFor={`${fieldId}-deliveryTime`}>
                  Preferred delivery time
                </label>
                <Field
                  as="select"
                  name="deliveryTime"
                  id={`${fieldId}-deliveryTime`}
                >
                  <option value="">-- Choose delivery time --</option>
                  <option value="morning">Morning (8:00–12:00)</option>
                  <option value="afternoon">Afternoon (12:00–16:00)</option>
                  <option value="evening">Evening (16:00–20:00)</option>
                </Field>
              </div>
              {/* ------  equipment ------ */}
              <div>
                <label>
                  <Field type="checkbox" name="restrictions" value="vegan" />
                  Vegan
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="restrictions"
                    value="gluten-free"
                  />
                  Gluten-free
                </label>
                <label>
                  <Field type="checkbox" name="restrictions" value="nut-free" />
                  Nut-free
                </label>
              </div>
              {/* -----  type------   */}
              <div>
                <label>
                  <Field type="radio" name="delivery" value="pickup" />
                  Pickup
                </label>
                <label>
                  <Field type="radio" name="delivery" value="courier" />
                  Courier
                </label>
                <label>
                  <Field type="radio" name="delivery" value="drone" />
                  Drone delivery
                </label>
              </div>
              <button type="submit">Place order</button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};
// ////////////////////  ------------    Валідація з Yup
export default AllFilters;
