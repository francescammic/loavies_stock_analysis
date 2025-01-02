// Set project ID', datasets and table variables for reference in sqlx files


// -- DATABASE a.k.a. Project ID --
const database = 'crack-celerity-275610' ;


// -- DATASETS -- 

// OUTPUT DATASET
const dataset_output = 'dataform_product_feed' ;


// -- TABLES -- 


// -- VARIABLES --
const updatedelete_start_period = 2 ;
const updatedelete_end_period = 0 ;


module.exports = {
    database,
    dataset_output,
    updatedelete_start_period,
    updatedelete_end_period
}