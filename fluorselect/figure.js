var figure = {
    "data": [
        {
            "line": {
                "shape": "spline"
            },
            "meta": {
                "columnNames": {
                    "x": "C",
                    "y": "D",
                    "text": "A"
                }
            },
            "mode": "markers",
            "name": "%{meta.columnNames.y}",
            "type": "scatter",
            "xsrc": "mike.stadnisky:0:ed1ca5",
            "x": [
                "13565",
                "1585",
                "4992",
                "5025",
                "8430",
                "1856",
                "1527",
                "2186",
                "4294",
                "1982",
                "1399",
                "1128",
                "2343",
                "3384",
                "3418",
                "5971",
                "2065",
                "834",
                "22846",
                "11709",
                "41773",
                "12059",
                "13497",
                "4549",
                "1878",
                "4257",
                "6824",
                "10161",
                "8702",
                "5775",
                "5504",
                "3575",
                "4534",
                "6667",
                "5300",
                "4256",
                "9844",
                "10227",
                "5047",
                "3967",
                "9931",
                "5369",
                "2830"
            ],
            "ysrc": "mike.stadnisky:0:2033b0",
            "y": [
                "145",
                "13",
                "41",
                "34",
                "255",
                "31",
                "9",
                "62",
                "114",
                "46",
                "21",
                "12",
                "30",
                "71",
                "37",
                "119",
                "31",
                "8",
                "340",
                "421",
                "540",
                "352",
                "280",
                "82",
                "52",
                "117",
                "96",
                "248",
                "275",
                "120",
                "181",
                "56",
                "114",
                "308",
                "151",
                "108",
                "231",
                "338",
                "104",
                "71",
                "168",
                "176",
                "78"
            ],
            "textsrc": "mike.stadnisky:0:5f0231",
            "text": [
                "PerCP-eFluor 710",
                "PerCP",
                "PerCP-Cy5.5",
                "PerCP Vio700",
                "BB515",
                "FITC",
                "NovaBlue 585",
                "Alexa Fluor 488",
                "Kiravia Blue 520",
                "NovaBlue 510",
                "NovaBlue 555",
                "NovaBlue530",
                "NovaBlue610 / 30S",
                "NovaBlue610 / 70S",
                "NovaBlue660 / 40S",
                "NovaBlue660 / 120S",
                "Spark Blue 550",
                "Alexa Fluor 532",
                "PE-Cy5.5",
                "PE",
                "PE-Cy5",
                "PE-Cy7",
                "PE-Dazzle594",
                "PE-AF700",
                "NovaYellow570",
                "NovaYellow610",
                "NovaYellow660",
                "NovaYellow 690",
                "NovaYellow 700",
                "NovaYellow 720",
                "CF568",
                "APC-eFluor 780",
                "NovaRed 660",
                "NovaRed 685",
                "NovaRed 700",
                "NovaRed 710",
                "APC",
                "Alexa Fluor 647",
                "APC-Cy7",
                "APC/Fire 750",
                "APC-R700",
                "Spark NIR 685",
                "Alexa Fluor 700"
            ],
            "transforms": [
                {
                    "meta": {
                        "columnNames": {
                            "groups": "B"
                        }
                    },
                    "type": "groupby",
                    "styles": [
                        {
                            "value": {},
                            "target": "Laser Line"
                        },
                        {
                            "value": {
                                "name": "488 nm",
                                "marker": {
                                    "color": "rgb(0, 0, 236)"
                                }
                            },
                            "target": "488"
                        },
                        {
                            "value": {
                                "marker": {
                                    "color": "rgb(207, 239, 59)"
                                }
                            },
                            "target": "488; 561"
                        },
                        {
                            "value": {
                                "marker": {
                                    "color": "rgb(255, 251, 3)"
                                }
                            },
                            "target": "561"
                        },
                        {
                            "value": {
                                "marker": {
                                    "color": "rgb(250, 5, 30)"
                                }
                            },
                            "target": "640"
                        }
                    ],
                    "groupssrc": "mike.stadnisky:0:73cba8",
                    "groups": [
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488",
                        "488; 561",
                        "488; 561",
                        "488; 561",
                        "488; 561",
                        "488; 561",
                        "488; 561",
                        "561",
                        "561",
                        "561",
                        "561",
                        "561",
                        "561",
                        "561",
                        "640",
                        "640",
                        "640",
                        "640",
                        "640",
                        "640",
                        "640",
                        "640",
                        "640",
                        "640",
                        "640",
                        "640"
                    ]
                }
            ]
        }
    ],
    "layout": {
        "title": {
            "text": "Spillover Spread v. Separation Index"
        },
        "xaxis": {
            "type": "log",
            "range": [
                2.7947049372384756,
                4.747356779391225
            ],
            "title": {
                "text": "Seperation Index"
            },
            "autorange": true
        },
        "yaxis": {
            "type": "linear",
            "range": [
                -31.78947368421052,
                579.7894736842105
            ],
            "title": {
                "text": "Spread"
            },
            "autorange": true
        },
        "autosize": true,
        "template": {
            "data": {
                "bar": [
                    {
                        "type": "bar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "table": [
                    {
                        "type": "table",
                        "cells": {
                            "fill": {
                                "color": "#EBF0F8"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#C8D4E3"
                            },
                            "line": {
                                "color": "white"
                            }
                        }
                    }
                ],
                "carpet": [
                    {
                        "type": "carpet",
                        "aaxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        },
                        "baxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        }
                    }
                ],
                "mesh3d": [
                    {
                        "type": "mesh3d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "contour": [
                    {
                        "type": "contour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "heatmap": [
                    {
                        "type": "heatmap",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatter": [
                    {
                        "type": "scatter",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "surface": [
                    {
                        "type": "surface",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "heatmapgl": [
                    {
                        "type": "heatmapgl",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "histogram": [
                    {
                        "type": "histogram",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "parcoords": [
                    {
                        "line": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        },
                        "type": "parcoords"
                    }
                ],
                "scatter3d": [
                    {
                        "type": "scatter3d",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattergl": [
                    {
                        "type": "scattergl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "choropleth": [
                    {
                        "type": "choropleth",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattergeo": [
                    {
                        "type": "scattergeo",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2d": [
                    {
                        "type": "histogram2d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatterpolar": [
                    {
                        "type": "scatterpolar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "contourcarpet": [
                    {
                        "type": "contourcarpet",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattercarpet": [
                    {
                        "type": "scattercarpet",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattermapbox": [
                    {
                        "type": "scattermapbox",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterpolargl": [
                    {
                        "type": "scatterpolargl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterternary": [
                    {
                        "type": "scatterternary",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2dcontour": [
                    {
                        "type": "histogram2dcontour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ]
            },
            "layout": {
                "geo": {
                    "bgcolor": "white",
                    "showland": true,
                    "lakecolor": "white",
                    "landcolor": "white",
                    "showlakes": true,
                    "subunitcolor": "#C8D4E3"
                },
                "font": {
                    "color": "#2a3f5f"
                },
                "polar": {
                    "bgcolor": "white",
                    "radialaxis": {
                        "ticks": "",
                        "gridcolor": "#EBF0F8",
                        "linecolor": "#EBF0F8"
                    },
                    "angularaxis": {
                        "ticks": "",
                        "gridcolor": "#EBF0F8",
                        "linecolor": "#EBF0F8"
                    }
                },
                "scene": {
                    "xaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    },
                    "yaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    },
                    "zaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "ticks": "",
                    "gridcolor": "#EBF0F8",
                    "linecolor": "#EBF0F8",
                    "automargin": true,
                    "zerolinecolor": "#EBF0F8",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "ticks": "",
                    "gridcolor": "#EBF0F8",
                    "linecolor": "#EBF0F8",
                    "automargin": true,
                    "zerolinecolor": "#EBF0F8",
                    "zerolinewidth": 2
                },
                "ternary": {
                    "aaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "baxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "caxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "bgcolor": "white"
                },
                "colorway": [
                    "#636efa",
                    "#EF553B",
                    "#00cc96",
                    "#ab63fa",
                    "#19d3f3",
                    "#e763fa",
                    "#fecb52",
                    "#ffa15a",
                    "#ff6692",
                    "#b6e880"
                ],
                "hovermode": "closest",
                "colorscale": {
                    "diverging": [
                        [
                            0,
                            "#8e0152"
                        ],
                        [
                            0.1,
                            "#c51b7d"
                        ],
                        [
                            0.2,
                            "#de77ae"
                        ],
                        [
                            0.3,
                            "#f1b6da"
                        ],
                        [
                            0.4,
                            "#fde0ef"
                        ],
                        [
                            0.5,
                            "#f7f7f7"
                        ],
                        [
                            0.6,
                            "#e6f5d0"
                        ],
                        [
                            0.7,
                            "#b8e186"
                        ],
                        [
                            0.8,
                            "#7fbc41"
                        ],
                        [
                            0.9,
                            "#4d9221"
                        ],
                        [
                            1,
                            "#276419"
                        ]
                    ],
                    "sequential": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ],
                    "sequentialminus": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ]
                },
                "plot_bgcolor": "white",
                "paper_bgcolor": "white",
                "shapedefaults": {
                    "line": {
                        "width": 0
                    },
                    "opacity": 0.4,
                    "fillcolor": "#506784"
                },
                "annotationdefaults": {
                    "arrowhead": 0,
                    "arrowcolor": "#506784",
                    "arrowwidth": 1
                }
            },
            "themeRef": "PLOTLY_WHITE"
        },
        "annotations": [
            {
                "x": 4610.4218006301235,
                "y": 102.46877686944799,
                "text": "",
                "showarrow": false
            }
        ]
    },
    "frames": []
}