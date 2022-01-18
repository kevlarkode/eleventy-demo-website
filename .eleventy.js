module.exports = function (eleventyConfig) {
    
    // added path for csss
    eleventyConfig.addPassthroughCopy("./src/style.css");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};