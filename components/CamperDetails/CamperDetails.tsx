"use client";

import { getOneCamper } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import css from "./CamperDetails.module.css";
import Features from "./Features";
import Reviews from "./Reviews";
import BookingForm from "./BookingForm";
import { useState } from "react";

type Props = {
  id: string;
};
//id передав пропсом
const CamperDetails = ({ id }: Props) => {
  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => getOneCamper(id),
    refetchOnMount: false,
  });

  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  ); // слідкувати клік по кнопці

  if (isLoading) return <p>Loading...</p>;

  if (error || !camper) return <p>Some error..</p>;

  return (
    <section className={css.container}>
      <div>
        <div className={css.camperBox}>
          <h2 className={css.campTitle}>{camper.name}</h2>
          <div className={css.campRewLocBox}>
            <p>
              ⭐{camper.reviews[0].reviewer_rating}({camper.reviews.length}
              Reviews)
            </p>
            <p>🗺{camper.location}</p>
          </div>
          <p className={css.campPrice}>€{camper.price}</p>
        </div>
        <div className={css.campGallery}>
          {camper.gallery.map((img, index) => (
            <div className={css.campImgThumb} key={index}>
              <Image
                src={img.thumb}
                alt={`${camper.name} image ${index + 1}`}
                width={320}
                height={200}
                className={css.campImg}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        <p className={css.campDescr}>{camper.description}</p>
      </div>

      <div>
        {/*  кнопки перемикання  опис - відгук  */}
        <div className={css.btnBox}>
          <button onClick={() => setActiveTab("features")}>Features</button>
          <button onClick={() => setActiveTab("reviews")}>Reviews</button>
        </div>
        <hr />
        <div className={css.infoBox}>
          {/* // те що відмальовується */}
          <div className={css.containerFeatRev}>
            {activeTab === "features" && <Features camper={camper} />}
            {activeTab === "reviews" && <Reviews camper={camper} />}
          </div>

          {/* ФОРМА */}
          <div className={css.containerBooking}>
            <BookingForm camper={camper} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamperDetails;
