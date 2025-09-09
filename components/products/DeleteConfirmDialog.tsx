"use client"

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/service/products";

export function DeleteConfirmDialog({
    open,
    onOpenChange,
    product,
    onConfirm,
}: {
    open: boolean; 
    onOpenChange: (open: boolean) => void; 
    product: Product | null; 
    onConfirm: () => void;
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Konfirmasi Penghapusan</DialogTitle> 
                    <DialogDescription>
                        Apakah anda yakin ingin mengapus data produk <span className="font-bold">{product?.name}</span>? Tindakan ini tidak dapat dibatalkan.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>Batal</Button>
                    <Button variant="destructive" onClick={() => { onConfirm(); onOpenChange(false); }}>Hapus</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}