import Container from "../../components/Container";
import EnterpriseCard from "../../components/cards/EnterpriseCard";
import ent1 from "../../assets/enterprices/ent1.png";
import ent2 from "../../assets/enterprices/ent2.png";
import ent3 from "../../assets/enterprices/ent3.png";
import ent4 from "../../assets/enterprices/ent4.png";

const Enterprises = () => {
  return (
    <Container>
      <div className="p-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        <EnterpriseCard
          icon={ent1}
          title={"A scalable,  reliable platform"}
          description={
            "Scale your traffic, content, and site performance to match your business — without worrying about reliability."
          }
        />
        <EnterpriseCard
          icon={ent2}
          title={"Advanced collaboration"}
          description={
            "Build and launch sites quickly — and safely — with powerful features designed to help large teams collaborate."
          }
        />
        <EnterpriseCard
          icon={ent3}
          title={"Dedicated, tailored support"}
          description={
            "From implementation support to in-the-moment troubleshooting, we’re here to offer personalized help."
          }
        />
        <EnterpriseCard
          icon={ent4}
          title={"Security and compliance"}
          description={
            "Launch with peace of mind thanks to Webflow’s robust security and compliance features and reliable hosting infrastructure."
          }
        />
      </div>
    </Container>
  );
};

export default Enterprises;
