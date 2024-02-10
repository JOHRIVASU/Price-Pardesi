import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Price Pardesi"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            PricePardesi is your dedicated ecommerce destination within the Open
            Network for Digital Commerce (ONDC) framework. Offering a diverse
            range of products and services, we prioritize seamless integration,
            competitive pricing, and a user-friendly experience. Explore a wide
            selection, benefit from exclusive deals, and enjoy secure
            transactions on our platform. Welcome to a convenient and
            budget-friendly online shopping experience tailored for ONDC users
            at PricePardesi.
          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "Price Pardesi - ShopNow",
  description: "Mern Stack Project",
  keywords: "mern,react,node,mongodb",
  author: "Hack",
};
export default About;
