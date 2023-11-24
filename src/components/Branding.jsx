import webflowIcon from "/webflow.png";

const Branding = () => {
  return (
    <div className="flex gap-1 items-center">
      <img src={webflowIcon} className="w-6 h-4" alt="site_logo" />
      <p className="text-xl font-semibold">Webflow</p>
    </div>
  );
};

export default Branding;
