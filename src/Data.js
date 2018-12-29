import React from 'react';

class Data {
    constructor(props){
    }


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
            name: "John",
            data: [2, 1, 3, 7],
            type: "column"
        },
        {
            name: "Jane",
            data: [2, -2, -3,2],
            type: "column"
        },
        {
            name: "Joe",
            data: [9, 11, 6, 9],
            type: "column"
        }
    ];

    static dataCategories = ["Apples", "Oranges", "Pears", "Grapes", "Bananas"];

}
export default Data;
