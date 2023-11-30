const EnterpriseCard = ({ icon, title, description }) => {
  return (
    <div className="text-white rounded border border-dark2/25">
      <img className="w-60 h-40 object-cover mx-auto" src={icon} alt="" />
      <div className="p-5">
        <h6 className="font-bold text-xl scale-y-120">{title}</h6>
        <h6 className="mt-5 text-sm">{description}</h6>
      </div>
    </div>
  );
};

export default EnterpriseCard;
