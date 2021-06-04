module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/entry": { page: "/entry" },
      "/loading": { page: "/loading" },
      "/privacy": { page: "/privacy" },
      "/thanks": { page: "/thanks" },
      "/requirements/001": { page: "/requirements/001" },
      "/requirements/002": { page: "/requirements/002" },
      "/requirements/003": { page: "/requirements/003" },
      "/requirements/004": { page: "/requirements/004" },
    }
  },
}
