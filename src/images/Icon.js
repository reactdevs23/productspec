import React from "react";

const Icon = ({ color, bg }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={41} height={41} fill="none">
      <circle cx={20.5} cy={20.5} r={20.5} fill={bg} />
      <path
        fill={color}
        d="M25.085 31a4.805 4.805 0 0 0 2.986-1.04 5.084 5.084 0 0 0 1.758-2.703 5.232 5.232 0 0 0-.195-3.25 5.026 5.026 0 0 0-2.066-2.46 4.774 4.774 0 0 0-3.086-.652 4.845 4.845 0 0 0-2.835 1.421l-.18.183-2.14-1.326.06-.243a4.414 4.414 0 0 0-.033-2.307l-.069-.243 2.761-1.836.183.145c.628.51 1.404.786 2.202.785a3.56 3.56 0 0 0 2.66-1.19 3.813 3.813 0 0 0 .96-2.829c-.076-1.04-.569-2-1.36-2.647a3.53 3.53 0 0 0-2.803-.763 3.605 3.605 0 0 0-2.444 1.611 3.841 3.841 0 0 0-.513 2.95l.052.233-2.768 1.833-.186-.166a4.166 4.166 0 0 0-3.008-1.059 4.196 4.196 0 0 0-2.879 1.392 4.48 4.48 0 0 0-1.141 3.066 4.47 4.47 0 0 0 1.232 3.027 4.187 4.187 0 0 0 2.919 1.3 4.174 4.174 0 0 0 2.975-1.155l.18-.17 2.146 1.33-.072.25a5.233 5.233 0 0 0 .065 3.092 5.061 5.061 0 0 0 1.79 2.478 4.8 4.8 0 0 0 2.85.943Zm0-8.116c.781 0 1.53.32 2.082.892.553.57.863 1.344.863 2.151 0 .808-.31 1.582-.863 2.153a2.896 2.896 0 0 1-2.082.891c-.78 0-1.53-.32-2.081-.891a3.096 3.096 0 0 1-.863-2.152c0-.808.31-1.582.863-2.152a2.896 2.896 0 0 1 2.081-.892Zm-.654-10.821c.434 0 .85.178 1.157.495.307.317.479.747.479 1.196 0 .448-.172.878-.48 1.195a1.609 1.609 0 0 1-1.156.495c-.434 0-.85-.178-1.156-.495a1.72 1.72 0 0 1-.48-1.195c0-.449.173-.879.48-1.196a1.608 1.608 0 0 1 1.156-.495Zm-9.16 10.145c-.607 0-1.19-.25-1.62-.693a2.409 2.409 0 0 1-.67-1.674c0-.628.241-1.23.67-1.674a2.253 2.253 0 0 1 1.62-.694c.607 0 1.19.25 1.62.694.429.444.67 1.046.67 1.674 0 .627-.241 1.23-.67 1.674a2.253 2.253 0 0 1-1.62.693Z"
      />
    </svg>
  );
};

export default Icon;
