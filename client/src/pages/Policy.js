import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Privacy Policy for PricePardesi:</p>
          <p>
            Information Collection: We collect necessary personal information
            during account creation and transactions. Payment details are
            securely processed through trusted gateways Data Usage: Information
            is used for order fulfillment, communication, and customer support.
            By using PricePardesi, users agree to these terms. For inquiries or
            concerns, contact [PricePardesiTeam@gmail.com].
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
