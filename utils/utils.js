class Utils {
    static async downloadResult(data, filename) {
        var fileURL = window.URL.createObjectURL(new Blob([data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', filename);
        document.body.appendChild(fileLink);
        fileLink.click();
    }

    static async convertAmPEPTableHeader(header) {
        let newHeader = header;
        switch (header) {
            case 'ampep':
                newHeader = 'AmPEP';
                break;
            case 'rfampep30':
                newHeader = 'RF-AmPEP30';
                break;
            case 'number_of_positives':
                newHeader = 'Number of positives';
                break;
            case 'product_of_probability':
                newHeader = 'Product of probability';
                break;
            default:
                break;
        }
        return newHeader;
    }
}

export default Utils;
