interface Props {
  text?: string;
}

const styleTheme = {
  display: "inline-block",
  margin: "50px",
  transform: "scale(1,-1)",
  mozTransform: "scale(1,-1)",
  webkitTransform: "scale(1,-1)",
  msTransform: "scale(1,-1)",
  color: "black",
  fontSize: "28px",
  fontWeight: "bold",
};

const MyComponent: React.FC<Props> = ({ text }) => {
  return <span style={styleTheme}>{text}</span>;
};

export default MyComponent;
