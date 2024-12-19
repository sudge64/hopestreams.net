import "./Partnership.css";

const Partnership = () => {
  return (
    <div className="text-background">
      <div style={{ padding: "20px" }}>
        <h1>Partnership</h1>
        <div className="give-forms">
          <script
            src="https://app.giveforms.com/widget.js"
            type="text/javascript"
          ></script>
          <iframe
            src="https://hopestreamsgiveforms.giveforms.com/hope-streams-partnership"
            id="giveforms-form-embed"
            name="giveforms"
            height="850px"
            width="50%"
            //allowpaymentrequest="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
