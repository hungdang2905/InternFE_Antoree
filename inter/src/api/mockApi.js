const mockProducts = Array.from({ length: 20 }, (_, i) => {
    const id = i + 1;
    return {
        id,
        name: `Khoá học ${id < 10 ? 'Cơ bản' : 'Chuyên sâu'} ${id}`,
        price: 300000 + (id * 50000),
        image: `https://via.placeholder.com/300x200?text=Product+${id}`,
        shortDescription: `Khoá học số ${id} giúp bạn nâng cao kỹ năng.`,
        fullDescription: `Đây là khoá học ${id} với đầy đủ nội dung, tài liệu, bài giảng và hỗ trợ từ giảng viên chuyên nghiệp.`,
        rating: (Math.random() * 2 + 3).toFixed(1),
        instructor: `Giảng viên ${Math.ceil(Math.random() * 10)}`
    };
});

export const fetchProducts = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(mockProducts), 800);
    });

export const fetchProductById = (id) =>
    new Promise((resolve, reject) => {
        const product = mockProducts.find((p) => p.id === id);
        setTimeout(() => {
            if (product) resolve(product);
            else reject("Không tìm thấy sản phẩm");
        }, 500);
    });

export const fetchSuggestions = (userId = 1) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.2;
            if (shouldFail) {
                reject("Không thể lấy gợi ý lúc này.");
            } else {
                const suggested = mockProducts.slice(0, 4);
                resolve(suggested);
            }
        }, 1000);
    });

export const searchProducts = (query) =>
    new Promise((resolve) => {
        setTimeout(() => {
            const filtered = mockProducts.filter((p) =>
                p.name.toLowerCase().includes(query.toLowerCase())
            );
            resolve(filtered);
        }, 300);
    });

export const filterByPrice = (range) =>
    new Promise((resolve) => {
        setTimeout(() => {
            let filtered = [];
            if (range === "low") {
                filtered = mockProducts.filter((p) => p.price < 500000);
            } else if (range === "mid") {
                filtered = mockProducts.filter((p) => p.price >= 500000 && p.price <= 1000000);
            } else if (range === "high") {
                filtered = mockProducts.filter((p) => p.price > 1000000);
            }
            resolve(filtered);
        }, 300);
    });