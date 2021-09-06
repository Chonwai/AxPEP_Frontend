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

    static async convertAcPEPTableHeader(header) {
        let newHeader = header;
        switch (header) {
            case 'id':
                newHeader = 'Id';
                break;
            case 'breast':
                newHeader = 'Breast (uM)';
                break;
            case 'cervix':
                newHeader = 'Cervix (uM)';
                break;
            case 'colon':
                newHeader = 'Colon (uM)';
                break;
            case 'lung':
                newHeader = 'Lung (uM)';
                break;
            case 'prostate':
                newHeader = 'Prostate (uM)';
                break;
            case 'skin':
                newHeader = 'Skin (uM)';
                break;
            default:
                break;
        }
        return newHeader;
    }

    static chopSequence(sequence) {
        if (sequence.length > 50) {
            return sequence.substring(0, 50) + '...';
        } else {
            return sequence;
        }
    }

    static randomItem(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
}

export default Utils;
