const s = {
  fill: 'none',
  stroke: '#fff',
  strokeMiterlimit: 10,
  strokeWidth: 2
};

const EyeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16.48">
    <circle cx="11.56" cy="8.33" r="3" style={s} />
    <path
      d="M1.07,8.33S3.69,1,11.5,1s10.43,7.33,10.43,7.33c0,0-2.42,7.06-10.12,7.15S1.07,8.33,1.07,8.33Z"
      style={s}
    />
  </svg>
);

export default EyeIcon;
