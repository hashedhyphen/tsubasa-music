module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/privacy": { page: "/privacy" },
      "/recruitment/001": { page: "/recruitment/001" },
      "/recruitment/002": { page: "/recruitment/002" },
      "/recruitment/003": { page: "/recruitment/003" },
      "/recruitment/004": { page: "/recruitment/004" },
    }
  },
}
