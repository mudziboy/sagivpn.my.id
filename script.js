document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const whatsappButtons = document.querySelectorAll('.whatsapp-button');

    // Menangani tombol "Beli Sekarang"
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = productCard.querySelector('.price').innerText;

            // Simulasi proses pembayaran dengan pop-up
            alert(`Anda akan membeli ${productName} dengan harga ${productPrice}. Ini adalah simulasi, untuk transaksi sesungguhnya, mohon hubungi kami via WhatsApp.`);
            
            // Contoh implementasi Sandbox Duitku (link dummy)
            // Dalam implementasi nyata, Anda akan mengarahkan pengguna ke halaman pembayaran yang dibuat via API.
            // window.location.href = 'https://sandbox.duitku.com/checkout?item=' + encodeURIComponent(productName);
        });
    });

    // Menangani tombol "WhatsApp"
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').innerText;
            const phoneNumber = '6285129477096'; // Nomor WhatsApp Sagi Market
            const message = `Halo, saya tertarik dengan produk ${productName} yang ada di website Sagi Market. Bisakah saya mendapatkan informasi lebih lanjut?`;
            
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});
