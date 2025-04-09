import Property from "@/components/properties/Property";
import useSelectedPropertyStore from "@/context/selectedProperty";
import properties from "@/data/dummy-properties";

function Properties() {
  const { selectedId } = useSelectedPropertyStore();
  return (
    <div className="properties grid">
      {properties.map((property, index) => (
        <Property
          key={index}
          className={`${
            selectedId === property.property_id ? "selected-property" : ""
          }`}
          property_id={property.property_id}
          title={property.title}
          price={property.price}
          location={property.location}
          features={property.features}
          description={property.description}
          images={property.images}
          status={property.status}
          isSaved={property.isSaved}
          paymentFrequency={property.payment_frequency}
        />
      ))}
    </div>
  );
}

export default Properties;
