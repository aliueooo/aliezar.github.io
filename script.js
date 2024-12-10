function showExplanation(rukun) {
    var explanationText = '';

    if (rukun === 'rukunIslam1') {
        explanationText = "<h3>1. Syahadat</h3><p>Syahadat adalah pengakuan atau kesaksian bahwa tiada Tuhan selain Allah, dan Muhammad adalah utusan Allah. Ini adalah dasar dari iman seorang Muslim.</p>";
    } else if (rukun === 'rukunIslam2') {
        explanationText = "<h3>2. Shalat</h3><p>Shalat adalah ibadah yang wajib dilakukan oleh setiap Muslim lima kali sehari. Shalat merupakan cara berkomunikasi langsung dengan Allah.</p>";
    } else if (rukun === 'rukunIslam3') {
        explanationText = "<h3>3. Zakat</h3><p>Zakat adalah kewajiban memberikan sebagian harta kepada yang berhak, sebagai bentuk kepedulian terhadap sesama dan untuk membersihkan harta.</p>";
    } else if (rukun === 'rukunIslam4') {
        explanationText = "<h3>4. Puasa</h3><p>Puasa dilakukan pada bulan Ramadan dengan menahan diri dari makan, minum, dan hal-hal yang membatalkan puasa dari fajar hingga matahari terbenam.</p>";
    } else if (rukun === 'rukunIslam5') {
        explanationText = "<h3>5. Haji</h3><p>Haji adalah ibadah yang dilakukan di Makkah, yang wajib dilakukan sekali seumur hidup bagi yang mampu secara fisik dan finansial.</p>";
    } else if (rukun === 'rukunIman1') {
        explanationText = "<h3>1. Iman kepada Allah</h3><p>Iman kepada Allah berarti meyakini bahwa Allah adalah Tuhan yang Maha Esa, pencipta langit dan bumi, serta segala yang ada di dalamnya.</p>";
    } else if (rukun === 'rukunIman2') {
        explanationText = "<h3>2. Iman kepada Malaikat</h3><p>Iman kepada malaikat adalah meyakini bahwa Allah menciptakan malaikat sebagai makhluk yang tidak tampak oleh manusia, yang menjalankan perintah Allah.</p>";
    } else if (rukun === 'rukunIman3') {
        explanationText = "<h3>3. Iman kepada Kitab-kitab Allah</h3><p>Iman kepada kitab-kitab Allah berarti meyakini bahwa Allah menurunkan kitab-Nya sebagai petunjuk hidup bagi umat manusia, seperti Al-Qur'an, Injil, Taurat, dan Zabur.</p>";
    } else if (rukun === 'rukunIman4') {
        explanationText = "<h3>4. Iman kepada Rasul-rasul Allah</h3><p>Iman kepada rasul-rasul Allah adalah meyakini bahwa Allah mengutus rasul-rasul untuk menyampaikan wahyu-Nya dan petunjuk hidup bagi umat manusia.</p>";
    } else if (rukun === 'rukunIman5') {
        explanationText = "<h3>5. Iman kepada Hari Akhir</h3><p>Iman kepada hari akhir adalah meyakini bahwa kehidupan di dunia ini akan berakhir, dan setiap amal perbuatan akan dimintai pertanggungjawaban di akhirat.</p>";
    } else if (rukun === 'rukunIman6') {
        explanationText = "<h3>6. Iman kepada Qada dan Qadar</h3><p>Iman kepada qada dan qadar berarti percaya bahwa segala sesuatu yang terjadi di alam semesta ini, baik itu kebaikan maupun keburukan yang terjadi atas kehendak Allah Swt. Semua umat Muslim harus selalu berprasangka baik kepada Allah Swt.</p>";
    }

    // Menampilkan penjelasan di dalam div
    document.getElementById('explanation').innerHTML = explanationText;
}
