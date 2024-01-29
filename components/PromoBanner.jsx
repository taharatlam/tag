import React, { useEffect } from "react";
import { getPromotionalDetails } from "../services/home.service";
import Modal from "react-responsive-modal";
import Colors from "../constants/colors";
import { useRouter } from "next/router";
import "react-responsive-modal/styles.css";
const PromoBanner = () => {
  const router = useRouter();
  const [bannerData, setBannerData] = React.useState({
    banner: "",
    modal_header: "",
    modal_subheader: "",
  });
  const [promoModal, setPromoModal] = React.useState(false);

  useEffect(() => {
    (async () => {
      const res = await getPromotionalDetails();
      setBannerData(res.data?.data);
      if (res.data?.data.modal_header.length > 0) {
        setPromoModal(true);
      }
    })();
  }, []);

  const onOpenModal = () => setPromoModal(true);
  const onCloseModal = () => setPromoModal(false);
  const path = router.pathname;
  return (
    <>
      {path !== "/" && (
        <div className="py-4" style={{ background: "black" }}>
          {bannerData.banner.length > 0 && (
            <div className="container" onClick={() => router.push("/contact-us")}>
              <p className=" promo-banner-text text-center m-0  text-white">{bannerData.banner}</p>
            </div>
          )}
          <Modal open={promoModal} onClose={onCloseModal} center>
            <div className=" p-3 border border-white border-4 bg-theme">
              <h1 className="text-white text-center mb-4 ">
                {bannerData.modal_header}
              </h1>
              <p className="m-0 text-white text-center fw-light  ">
                {bannerData.modal_subheader}
              </p>
              <div className="d-flex justify-content-center p-3">
                <button
                  onClick={() => {
                    router.push("/contact-us");
                    setPromoModal(false);
                  }}
                  className="border border-3 border-white p-3 bg-theme fw-bold text-white"
                >
                  APPLY NOW!
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default PromoBanner;
