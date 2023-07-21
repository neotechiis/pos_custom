// Copyright (c) 2023, Kishan Panchal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Printer Settings', {
	refresh: function (frm) {
		// Fetch the list of available printers
		frappe.ui.form
			.qz_connect()
			.then(function () {
				return qz.printers.find();
			})
			.then((data) => {
				// Get the default_printer field control
				let defaultPrinterField = frm.fields_dict['default_printer'];

				// Clear existing options
				defaultPrinterField.df.options = [];

				// Add new options from the list of available printers
				for (let printer of data) {
					defaultPrinterField.df.options.push(printer);
				}

				// Refresh the field to update the options
				defaultPrinterField.refresh();
			})
			.catch((err) => {
				// Handle any errors that may occur while fetching printers
				console.error('Error fetching printers:', err);
			});
	}
});

