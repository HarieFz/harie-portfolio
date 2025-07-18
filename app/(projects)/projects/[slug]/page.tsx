"use client";

import React, { use, useEffect, useRef, useState } from "react";

// Next modules
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Component
import Dialog from "@/components/Dialog";

// Icons
import ArrowLeft from "../../../../public/icons/arrow-left.svg";
import Chain from "../../../../public/icons/link.svg";
import Maximize from "../../../../public/icons/maximize.svg";
import Minimize from "../../../../public/icons/minimize.svg";

// Utils
import { slugify } from "@/utils/slugify";

// Data
import { projectsData } from "@/data/projects";

// Swiper modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Detail({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();

  // Ambil slug dari parameter halaman menggunakan hook `use`
  const { slug } = use<{ slug: string }>(params);

  // Swiper refs
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);

  // Dialog state
  const [open, setOpen] = useState<boolean>(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const dialogContentRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);

  // Ambil data project berdasarkan slug
  const data = projectsData.find((project) => slugify(project.title) === slug);

  /**
   * Tampilkan dialog full screen dan simpan index slide aktif.
   */
  const handleMaximize = () => {
    const activeIndex = mainSwiper?.activeIndex ?? currentSlideIndex;
    setCurrentSlideIndex(activeIndex);
    setOpen(true);
  };

  /**
   * Tutup dialog preview.
   */
  const handleDialogClose = () => {
    setOpen(false);
  };

  // Keyboard handler saat dialog terbuka
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextButtonRef.current?.click();
      } else if (e.key === "ArrowLeft") {
        prevButtonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <Head>
        <title>Project Detail | Harie Fairuz Zaki - Front-End Web Developer</title>
      </Head>

      {/* Tombol kembali */}
      <button onClick={() => router.back()} className="flex items-center gap-3 mb-3 cursor-pointer">
        <ArrowLeft className="text-[14px] text-white" />
        <p className="lg:text-2xl text-xs text-white">Harie Fairuz Zaki</p>
      </button>

      {/* Judul & Garis Pemisah */}
      <h1 className="font-bold lg:text-[40px] text-xl text-white">Project</h1>
      <div className="w-full h-[0.5px] lg:my-8 my-3 bg-[#EBEDF0]/40" />

      {/* Konten grid */}
      <div className="lg:grid lg:grid-cols-10 lg:gap-8">
        {/* Carousel utama */}
        <div className="relative lg:col-span-3 z-0 max-lg:mb-6">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="relative mb-5 rounded-2xl select-none"
            onSwiper={(swiper) => setMainSwiper(swiper)}
            onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
          >
            {/* Tombol buka dialog */}
            <div
              className="absolute z-10 top-3 right-3 w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all cursor-pointer text-gray-700 hover:text-gray-900 flex items-center justify-center"
              onClick={handleMaximize}
            >
              <Maximize className="text-sm" />
            </div>

            {/* Gambar utama */}
            {data?.images?.map((img, index) => (
              <SwiperSlide key={index} className="relative rounded-2xl aspect-[360/279]">
                <Image
                  src={img}
                  alt={`img-${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover object-top rounded-[inherit]"
                  loading={index + 1 ? "lazy" : "eager"}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail carousel */}
          {data?.images && data.images.length > 1 ? (
            <Swiper
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
              spaceBetween={19}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper select-none"
            >
              {data?.images?.map((img, index) => (
                <SwiperSlide key={index} className="rounded">
                  <Image
                    src={img}
                    alt={`img-${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-20 h-15.5 object-cover object-top rounded-[inherit]"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>

        {/* Informasi proyek */}
        <div className="lg:col-span-7 flex flex-col lg:gap-6 gap-3">
          {/* Judul dan deskripsi */}
          <div>
            <p className="font-bold lg:text-2xl text-xs text-white lg:mb-3 mb-2">{data?.title}</p>
            <div
              dangerouslySetInnerHTML={{ __html: data?.description ?? "" }}
              className="text-justify hyphens-auto lg:text-base text-2xs text-white"
            ></div>
          </div>

          {/* Link demo */}
          {data?.demo !== undefined && (
            <div>
              <p className="font-bold lg:text-base text-xs text-white mb-3">Demo</p>
              <div className="flex items-center gap-2">
                <Chain />
                <Link
                  href={data?.demo?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold lg:text-xs text-2xs text-white"
                >
                  {data?.demo?.name}
                </Link>
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <p className="font-bold lg:text-base text-xs text-white mb-3">Built With</p>
            <div className="flex flex-wrap items-center lg:gap-3 gap-2">
              {data?.tech.map((tech, i) => (
                <div key={i} className="card-tech">
                  <p className="font-bold lg:text-xs text-2xs text-[#2489FF]">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog preview gambar */}
      <Dialog ref={dialogContentRef} open={open} onClose={handleDialogClose}>
        {/* Konten Dialog */}
        <Swiper
          spaceBetween={10}
          initialSlide={currentSlideIndex}
          key={`dialog-swiper-${open}`}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
            disabledClass: "swiper-button-disabled",
          }}
          thumbs={undefined}
          modules={[FreeMode, Navigation]}
          className="relative rounded-2xl select-none"
          autoHeight={true}
          onSlideChange={(swiper) => {
            // Manual sync dengan main swiper dan thumbs
            if (mainSwiper && mainSwiper.slideTo) {
              mainSwiper.slideTo(swiper.activeIndex);
            }
            if (thumbsSwiper && thumbsSwiper.slideTo) {
              thumbsSwiper.slideTo(swiper.activeIndex);
            }
            setCurrentSlideIndex(swiper.activeIndex);
          }}
        >
          {/* Tombol minimize dialog */}
          <div
            className="z-999 fixed lg:top-4 lg:right-6 top-3 right-9 w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all cursor-pointer text-gray-700 hover:text-gray-900 flex items-center justify-center"
            onClick={handleDialogClose}
          >
            <Minimize className="text-sm" />
          </div>

          {/* Gambar utama */}
          {data?.images?.map((img, index) => (
            <SwiperSlide key={index} className="rounded-2xl">
              <Image
                src={img}
                alt={`img-${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-contain object-top rounded-[inherit]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol navigasi dialog (custom positioning) */}
        <div
          ref={prevButtonRef}
          className="hidden swiper-button-prev-custom absolute 2xl:-left-20 xl:-left-14 lg:-left-12 top-1/2 -translate-y-1/2 z-10 2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all cursor-pointer lg:flex items-center justify-center group"
          onClick={() => dialogContentRef.current?.scrollTo({ top: 0, behavior: "instant" })}
        >
          {/* Panah kiri */}
          <svg
            className="w-6 h-6 text-gray-700 group-hover:text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div
          ref={nextButtonRef}
          className="hidden swiper-button-next-custom absolute 2xl:-right-20 xl:-right-14 lg:-right-12 top-1/2 -translate-y-1/2 z-10 2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all cursor-pointer lg:flex items-center justify-center group"
          onClick={() => dialogContentRef.current?.scrollTo({ top: 0, behavior: "instant" })}
        >
          {/* Panah kanan */}
          <svg
            className="w-6 h-6 text-gray-700 group-hover:text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Dialog>
    </>
  );
}
