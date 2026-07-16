import PDFDocument from 'pdfkit';

export const generateInvoice = async (req, res) => {
  try {
    const { orderId } = req.params;

    const doc = new PDFDocument();

    res.setHeader(
      'Content-Type',
      'application/pdf'
    );

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=invoice-${orderId}.pdf`
    );

    doc.pipe(res);

    doc
      .fontSize(24)
      .text('WorkShelf Invoice');

    doc.moveDown();

    doc
      .fontSize(16)
      .text(`Order ID: ${orderId}`);

    doc.text(
      `Date: ${new Date().toLocaleDateString()}`
    );

    doc.moveDown();

    doc.text('Thank you for shopping with WorkShelf!');

    doc.moveDown();

    doc.text('Items:');
    doc.text('- Atomic Habits');
    doc.text('- Clean Code');

    doc.moveDown();

    doc.fontSize(18).text('Total: $89.98');

    doc.end();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};