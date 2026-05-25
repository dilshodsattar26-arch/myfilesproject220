const coreManagerInstance = {
    version: "1.0.220",
    registry: [755, 1043, 1275, 736, 1432, 1295, 715, 127],
    init: function() {
        const nodes = this.registry.filter(x => x > 315);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});