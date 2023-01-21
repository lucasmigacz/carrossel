// Main Imports
import Image from "next/image";
import styled from "styled-components";

// Swipter Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, FreeMode } from "swiper";

// Images from cards carousel
import node from "../public/nodejs.svg";
import figma from "../public/figma.svg";
import sql from "../public/sql.svg";
import sanity from "../public/sanity.svg";
import next from "../public/next.svg";
import netflix from "../public/netflix.svg";
import nasa from "../public/nasa.svg";

export default function Home() {
  return (
    <>
      <MainCarousel>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          modules={[EffectCoverflow, FreeMode]}
          effect="coverflow"
          coverflowEffect={{ depth: 30, modifier: 1, rotate: 30 }}
          freeMode={{ enabled: true }}
        >
          <SwiperSlide>
            <CarouselCard>
              <Image src={sql} alt="PostgreSQL" />
              <TitleCard>PostgreSQL</TitleCard>
              <TextCard>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextCard>
              <BusinessImagesBottomCard>
                <Image src={netflix} alt="Netflix image" />
                <Image src={nasa} alt="Nasa image" />
              </BusinessImagesBottomCard>
            </CarouselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard>
              <Image src={figma} alt="figma" />
              <TitleCard>Figma</TitleCard>
              <TextCard>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextCard>
              <BusinessImagesBottomCard>
                <Image src={netflix} alt="Netflix image" />
                <Image src={nasa} alt="Nasa image" />
              </BusinessImagesBottomCard>
            </CarouselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard>
              <Image src={sanity} alt="sanity" />
              <TitleCard>Sanity</TitleCard>
              <TextCard>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextCard>
              <BusinessImagesBottomCard>
                <Image src={netflix} alt="Netflix image" />
                <Image src={nasa} alt="Nasa image" />
              </BusinessImagesBottomCard>
            </CarouselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard>
              <Image src={node} alt="node" />
              <TitleCard>NodeJS</TitleCard>
              <TextCard>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextCard>
              <BusinessImagesBottomCard>
                <Image src={netflix} alt="Netflix image" />
                <Image src={nasa} alt="Nasa image" />
              </BusinessImagesBottomCard>
            </CarouselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard>
              <Image src={next} alt="next" />
              <TitleCard>NextJS</TitleCard>
              <TextCard>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TextCard>
              <BusinessImagesBottomCard>
                <Image src={netflix} alt="Netflix image" />
                <Image src={nasa} alt="Nasa image" />
              </BusinessImagesBottomCard>
            </CarouselCard>
          </SwiperSlide>
        </Swiper>
      </MainCarousel>
    </>
  );
}

export const MainCarousel = styled.div`
  padding-top: 300px;
  user-select: none;
`;
export const CarouselCard = styled.div`
  width: 400px;
  height: 500px;
  background: #101010;
  border-radius: 10px;
  padding: 40px 20px 0 20px;
  cursor: pointer;
`;
export const TitleCard = styled.h1`
  margin-bottom: 20px;
  font-weight: 400;
  color: white;
`;
export const TextCard = styled.p`
  font-size: 1.15em;
  line-height: 1.3;
  letter-spacing: 0.3px;
  color: #cdd1d6;
`;
export const BusinessImagesBottomCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;
