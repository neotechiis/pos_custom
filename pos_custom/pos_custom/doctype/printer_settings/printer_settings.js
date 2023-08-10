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
				let printer1 = frm.fields_dict['printer1'];
				let printer2 = frm.fields_dict['printer2'];
				let printer3 = frm.fields_dict['printer3'];
				let printer4 = frm.fields_dict['printer4'];

				printer1.df.options = [];
				printer2.df.options = [];
				printer3.df.options = [];
				printer4.df.options = [];
				data.push("");

				// Add new options from the list of available printers
				for (let printer of data) {
					printer1.df.options.push(printer);
					printer2.df.options.push(printer);
					printer3.df.options.push(printer);
					printer4.df.options.push(printer);
				}

				// Refresh the field to update the options
				printer1.refresh();
				printer2.refresh();
				printer3.refresh();
				printer4.refresh();
			})
			.catch((err) => {
				// Handle any errors that may occur while fetching printers
				console.error('Error fetching printers:', err);
			});
	}
});

