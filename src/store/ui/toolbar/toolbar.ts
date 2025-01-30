export const useToolbar = defineStore("toolbar", {
    state: () => ({
        toolbarItems: [
            {
                name: "File", items: [
                    [
                        {
                            label: "New",
                            icon: "i-lucide-file-plus",
                            kbds: ["CTRL", "n"]
                        },
                        {
                            label: "Open",
                            icon: "i-lucide-folder-open",
                            kbds: ["CTRL", "o"]
                        },
                        {
                            label: "Open More",
                            icon: "i-lucide-folder-open",
                            kbds: ["CTRL", "SHIFT", "o"],
                            children: [
                                {
                                    label: "Open From Cloud",
                                    icon: "i-lucide-cloud",
                                },
                                {
                                    label: "Open From Link",
                                    icon: "i-lucide-link",
                                },
                                {
                                    label: "Use Template",
                                    icon: "i-lucide-file-plus",
                                }
                            ]
                        },
                    ],
                    [
                        {
                            label: "Save",
                            icon: "i-lucide-save",
                            kbds: ["CTRL", "s"]
                        },
                        {
                            label: "Save As",
                            icon: "i-lucide-save",
                            kbds: ["CTRL", "SHIFT", "s"]
                        },
                    ],
                    [
                        {
                            label: "Export",
                            icon: "i-lucide-download",
                            kbds: ["CTRL", "e"],
                            children: [
                                {
                                    label: "PNG",
                                },
                                {
                                    label: "JPG",
                                },
                                {
                                    label: "SVG",
                                },
                            ]
                        },
                        {
                            label: "Print",
                            icon: "i-lucide-printer",
                            kbds: ["CTRL", "p"]
                        }
                    ],
                    [
                        {
                            label: "File Properties",
                            icon: "i-lucide-info",
                        },
                        {
                            label: "Settings",
                            icon: "i-lucide-settings",
                            kbds: ["CTRL", ","]
                        }
                    ],
                    [
                        {
                            label: "Close",
                            icon: "i-lucide-x",
                        },
                    ]
                ]
            },
            {
                name: "Edit", items: [
                    [

                    ]
                ]
            },
            { name: "Image", items: [] },
            { name: "Layer", items: [] },
            { name: "Select", items: [] },
            { name: "Filter", items: [] },
            { name: "View", items: [] },
            { name: "Window", items: [] },
            { name: "More", items: [] },
            { name: "Help", items: [] },

        ]
    })
})
