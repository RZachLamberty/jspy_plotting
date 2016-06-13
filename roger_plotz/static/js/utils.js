function unpack(rows, key) {
    // given an array-like of objects (e.g. pd.df.to_json(orient='records'))
    // return an array which is all the "key" values of those dicts
    return rows.map(function(row) { return row[key]; });
}

function arraymax( array ) {
    return Math.max.apply( Math, array );
};
