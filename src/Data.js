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

    static dataCategories = ["Apples", "Oranges", "Pears", "Grapes", "Bananas"];

}
