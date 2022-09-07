import css from "../styles/Services.module.css";
import Image from "next/dist/client/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>YOUR FAVOURITE</span>
        <span>DELIVERY PATNER</span>
      </div>
      {/* features */}

      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy to Order</span>
          <span>You Only Need a Few Steps in Food Ordering</span>
        </div>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Faster Delivery</span>
          <span>Delivery Is Always On Time Even Faster</span>
        </div>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s3} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Quality Assured</span>
          <span>Not Only Fast For Us, Quality Is Also Number one</span>
        </div>
      </div>
    </>
  );
}
