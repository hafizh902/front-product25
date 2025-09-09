"use client"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { ProductPayload } from "@/service/products"

export function ProductForm({
    form, setForm, errors, isSubmitting, onSubmit
}: {
    form: ProductPayload;
    setForm: (form: ProductPayload) => void;
    errors: Record<string, string>;
    isSubmitting: boolean;
    onSubmit: (e: React.FormEvent) => void;
}) {
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setForm({ ...form, price: value === '' ? 0 : parseFloat(value) || 0 });
    };

    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setForm({ ...form, stock: value === '' ? 0 : parseInt(value) || 0 });
    };

    return (
        <form onSubmit={onSubmit} className="space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Nama Produk</Label>
                <Input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Masukkan nama produk"
                    required
                    className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="price" className="text-sm font-medium">Harga</Label>
                <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price === 0 ? '' : form.price}
                    onChange={handlePriceChange}
                    placeholder="Masukkan harga produk"
                    required
                    className={errors.price ? "border-red-500" : ""}
                />
                {errors.price && <p className="text-sm text-red-600 mt-1">{errors.price}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="stock" className="text-sm font-medium">Stok</Label>
                <Input
                    id="stock"
                    type="number"
                    min="0"
                    value={form.stock === 0 ? '' : form.stock}
                    onChange={handleStockChange}
                    placeholder="Masukkan jumlah stok"
                    required
                    className={errors.stock ? "border-red-500" : ""}
                />
                {errors.stock && <p className="text-sm text-red-600 mt-1">{errors.stock}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">Deskripsi</Label>
                <Input
                    id="description"
                    type="text"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Masukkan deskripsi produk"
                    required
                    className={errors.description ? "border-red-500" : ""}
                />
                {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Menyimpan...' : 'Simpan Produk'}
            </Button>
        </form>
    );
}
