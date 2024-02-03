import { ButtonLearnMore } from "./Buttons.styled";

const LearnMoreButton = ({ setIsModalOpen }) => {
  return (
    <ButtonLearnMore onClick={() => setIsModalOpen(true)}>
      Learn more
    </ButtonLearnMore>
  );
};

export default LearnMoreButton;
