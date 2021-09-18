const plugin = require("tailwindcss/plugin");

const myPlugin = plugin(function ({
  addUtilities,
  variants,
  addComponents,
  theme,
  e,
}) {
  const colors = theme("colors");
  console.log(colors);
  //   const baseSelectors = Object.keys(colors)
  //     .map((color) => {
  //       if (typeof colors[color] === "object") {
  //         return Object.keys(colors[color]).map((shade) => {
  //           return `.${e(`textshadow-neon-${color}-${shade}`)}`;
  //         });
  //       }
  //       return `.textshadow-neon-${color}`;
  //     })
  //     .flat();
  addUtilities([
    { ".w-fit": { width: "fit-content" } },
    {
      ".textshadow-neon": {
        textShadow: `0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem rgb(59, 130, 246),
              0 0 0.8rem rgb(59, 130, 246),
              0 0 2.8rem rgb(59, 130, 246)
              `,
      },
    },
    {
      ".cs-border-dash": {
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23333' stroke-width='5' stroke-dasharray='6%2c 17' stroke-dashoffset='11' stroke-linecap='round'/%3e%3c/svg%3e")`,
      },
    },
    Object.keys(colors)
      .map((color) => {
        if (typeof colors[color] === "object") {
          return Object.keys(colors[color]).map((shade) => {
            // console.log(shade);
            return {
              [`.${e(`cs-border-dash-${color}-${shade}`)}`]: {
                // "--tw-textshadow-neon": theme(`colors.${color}.${shade}`),
                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23${theme(
                  `colors.${color}.${shade}`
                )?.replace(
                  "#",
                  ""
                )}FF' stroke-width='5' stroke-dasharray='6%2c 17' stroke-dashoffset='11' stroke-linecap='round'/%3e%3c/svg%3e")`,
              },
            };
          });
        }
        return null;
      })
      .flat(),
    // {
    //   [baseSelectors]: {
    //     textShadow: `0 0 .2rem #fff,
    //           0 0 .2rem #fff,
    //           0 0 2rem var(--tw-textshadow-neon),
    //           0 0 0.8rem var(--tw-textshadow-neon),
    //           0 0 2.8rem var(--tw-textshadow-neon)
    //           `,
    //   },
    // },
  ]);
});
module.exports = myPlugin;
