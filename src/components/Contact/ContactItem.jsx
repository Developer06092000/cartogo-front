const ContactItem = ({ icon: Icon, text = "" }) => {
  return (
    <div className="col-lg-6 py-3 col-md-6 col-sm-12">
      <Icon size="3rem" className="d-block mx-auto pb-2" />
      <h4 className="text-center">{text}</h4>
    </div>
  );
};

export default ContactItem;
