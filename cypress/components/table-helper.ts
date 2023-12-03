/// <reference types='cypress-xpath' />

import { ElementHelper } from './element-helper';
import { VerificationHelper } from './verification-helper';

export class TableHelper {
    /**
     * To click a cell in a table
     * @param tableAttributeValue - the value of the attribute
     * @param cellValue - the cell value that we wish to click
     * @param tableAttribute - eg: id, class, name, href
     * @param isForce
     * Example: clickCellInTableByValue('employee', 'David') - This will click the cell David in a table (where id contains employee)
     * Example: clickCellInTableByValue('employee', 'David', 'href') - This will click the cell David in a table (where href contains employee)
     */
    static clickCellInTableByValue(
        tableAttributeValue: string,
        cellValue: string,
        tableAttribute: string = 'id',
        isForce: boolean = false,
    ) {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                        //td[contains(text(),"${cellValue}")]`;
        ElementHelper.click(element, isForce);
    }

    /**
     * To click a cell in a table for a particular column, based on reference column header and other row values
     * @param tableAttributeValue - the value of the attribute
     * @param columnHeader - the column of the value we wish to click
     * @param rowCellReference - value of another cell in the same row
     * @param tableAttribute - eg: id, class, name, href
     * @param isForce
     * Example: clickCellInTableByColumnAndRowReference(employee, 'DOB', 'David') - This will click the DOB value for David in the employee table
     */
    static clickCellByColumnHeaderAndRowReference(
        tableAttributeValue: string,
        columnHeaderValue: string,
        rowCellReference: string,
        tableAttribute: string = 'id',
        isForce: boolean = false,
    ) {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                        //tr[.//*[contains(text(), "${rowCellReference}")]]
                        //td[count(//th[text()="${columnHeaderValue}"]/preceding-sibling::th)+1]`; // the count here will return an index number for the column
        ElementHelper.click(element, isForce);
    }

    /**
     * See clickCellInTableByColumnAndRowReference, but in this case instead of Clicking the cell, we are checking the cell value
     * @param tableAttributeValue
     * @param columnHeaderValue
     * @param rowCellReference
     * @param expectedValue
     * @param tableAttribute
     * @param isMatch
     */
    static verifyCellValueByColumnHeaderAndRowReference(
        tableAttributeValue: string,
        columnHeaderValue: string,
        rowCellReference: string,
        expectedValue: string,
        isMatch: boolean = true,
        tableAttribute: string = 'id',
    ) {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                        //tr[.//*[contains(text(), "${rowCellReference}")]]
                        //td[count(//th[text()="${columnHeaderValue}"]/preceding-sibling::th)+1]`; // the count here will return an index number for the column
        VerificationHelper.matchValue(element, expectedValue, isMatch);
    }
}
