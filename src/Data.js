export default class Data {
    static changeDataSeries(dataSeries){
        this.dataSeries = dataSeries;
    }

    static changeDataCategories(dataCategories){
        this.dataCategories = dataCategories;
    }


    static dataSeries = [
        {
            name: "John",
            data: [5, 3, 4, 7, 2],
            type: "column"
        },
        {
            name: "Jane",
            data: [2, -2, -3, 2, 1],
            type: "column"
        },
        {
            name: "Joe",
            data: [3, 4, 4, -2, 5],
            type: "column"
        }
    ];

    static dataSeries2 = [
        {
            name: "Jacek",
            data: [2, 1, 3, 7],
            type: "column"
        },
        {
            name: "Agata",
            data: [2, -2, -3,2],
            type: "column"
        },
        {
            name: "Krzys",
            data: [9, 11, 6, 9],
            type: "column"
        }
    ];

    static dataCategories = ["Apples", "Oranges", "Pears", "Grapes", "Bananas"];

}
