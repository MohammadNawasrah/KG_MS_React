<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display JSON in Tabs</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>
<style>
    [data-type="father"] {
        background-color: rgb(0, 0, 0);
        margin-top: 8px;
        border: rgb(0, 0, 0) 2px solid;
        border-radius: 6px;
        color: rgb(255, 255, 255);
        cursor: pointer;
    }

    [data-type="chiled"] {
        margin-left: 31px;
        cursor: pointer;
    }
</style>

<body>

    <div class="container mt-5">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" id="json_tab" data-bs-toggle="tab" href="#json_panel">JSON</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="rawdata_tab" data-bs-toggle="tab" href="#rawdata_panel">Raw Data</a>
            </li>
        </ul>
        <div id="json_panel"></div>

    </div>
    </div>

    <script>
        $(document).ready(function () {
            $("#json_tab").on("click", function () {
                $('#json_panel').html('')
                const jsonModal = new JsonModal(json, "json_panel")
                $(".valueData").css({
                    "color": "green",
                    "margin-left": "30px"
                })

                $(".valueData").parents().css({
                    "margin-left": "20px",
                    "height": "20px",
                })
                $(".father").on("click", function () {
                    $(this).children().animate({ opacity: $(this).children().css('opacity') === '1' ? 0 : 1 });
                });
            });
            $("#rawdata_tab").on("click", function () {
                $('#json_panel').html('')
                $('#pre').html(JSON.stringify(json, null, 2))
            });
            $(".valueData").css({
                "color": "green",
                "margin-left": "30px"
            })

            $(".valueData").parents().css({
                "margin-left": "20px",
                "height": "20px",
            })
            $(".father").on("click", function () {
                $(this).children().animate({ opacity: $(this).children().css('opacity') === '1' ? 0 : 1 });
            });
        })
        class JsonModal {
            json;
            mainDiv;
            index = 0;
            chiled = 0;
            constructor(json, mainDiv) {
                this.json = json;
                this.mainDiv = mainDiv;
                console.log(this.getKeys(this.json))
                this.setKeysInHtml(this.getKeys(this.json));
            }
            isValidJson() {
                try {
                    JSON.stringify(json);
                    return true;
                } catch (error) {
                    return false;
                }
            }
            getKeys(json) {
                return Object.keys(json);
            }
            setKeysInHtml(keys) {
                keys.forEach(key => {
                    this.shortCut(this.mainDiv, key, "father", this.json)
                });
            }
            setArrayChildHtml(json, array, father) {
                array.forEach((item, i) => {
                    this.shortCut(father, i, "chiled", json)
                })
                this.chiled = 0;
            }
            shortCut(father, key, incre, json) {
                if (incre === "chiled") {
                    var id = key + "chiled" + this.chiled;
                    var targitId = father + key + "chiled" + this.chiled
                }
                if (incre === "father") {
                    var id = key + "father" + this.index;
                    var targitId = key + "father" + this.index
                }
                $(`#${father}`).append(`<div class="father"  id="${id}s" data-type="${incre}" data-bs-toggle="collapse" data-bs-target="#${targitId}" aria-expanded="false"aria-controls="${id}">
                <span id="plus">+</span> ${key}</div>`);
                if (this.isKeyHasObject(json[key])) {
                    $(`#${father}`).append(` <div data-type="middel" class="collapse"  id="${targitId}"></div>`)
                    this.setChildInHtml(json[key], this.getKeys(json[key]), targitId)
                } else if (this.isHasArray(json[key])) {
                    $(`#${father}`).append(` <div  data-type="middel"  class="collapse"  id="${targitId}"></div>`)
                    this.setArrayChildHtml(json[key], json[key], targitId)
                }
                else {
                    $(`#${father}`).append(` <div data-type="middel"  class="collapse"  id="${targitId}"></div>`)
                    this.setValueInHtml(json[key], key, targitId)
                }
                if (incre === "child")
                    this.chiled++;
                else
                    this.index++
            }
            setValueInHtml(json, keys, father) {
                $(`#${father}`).append(`<div  id="#${keys + "value" + this.chiled}" class="valueData">
                -  ${json}</div>`);
            }
            setChildInHtml(json, keys, father) {
                keys.forEach(key => {
                    this.shortCut(father, key, "chiled", json)
                });
                this.chiled = 0;
            }
            isKeyHasObject(data) {
                return typeof data === 'object' && data !== null && !Array.isArray(data);
            }
            isHasArray(data) {
                return data !== null && Array.isArray(data);
            }
        }

        const json = {
            "person": {
                "name": "John Doe",
                "age": 30,
                "city": "New York",
                "isStudent": false,
                "grades": [95, 88, 92],
                "address": {
                    "street": "123 Main St",
                    "zipCode": "10001",
                    "country": "USA"
                }
            },
            "company": {
                "name": "TechCorp",
                "industry": "Technology",
                "employees": [
                    { "name": "Alice", "position": "Software Engineer" },
                    { "name": "Bob", "position": "UX Designer" },
                    { "name": "Charlie", "position": "Data Scientist" }
                ]
            },
            "products": [
                { "name": "Smartphone", "price": 799.99, "inStock": true },
                { "name": "Laptop", "price": 1299.99, "inStock": false },
                { "name": "Headphones", "price": 149.99, "inStock": true }
            ],
            "x": "d"
        };
        const jsonModal = new JsonModal(json, "json_panel")
        function getQueryParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Get the 'data' parameter from the URL
        const dataValue = getQueryParameter('data');

        // Display the data value
        console.log('Data:', dataValue);
    </script>

</body>

</html>
