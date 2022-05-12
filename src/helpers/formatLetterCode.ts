interface formatLetterCodeProps {
  letter: string;
  index: number;
}

const formatLetterCode = ({ letter, index }: formatLetterCodeProps) => {
  return `${letter}_${index}`;
};

export default formatLetterCode;
