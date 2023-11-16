import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <textarea placeholder="tap here to open keyboard" />
      <div className="keyboard-actions">Keyboard action sheet</div>
    </>
  );
};

export default ExploreContainer;
