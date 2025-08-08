import React from 'react'

export default function SizeOptions({ product }) {
    return (
        <>
            <div className="mb-3">
                {product.size && product.size.length > 1 && (
                    <div className="mb-2">
                        <label className="form-label small text-muted">Size:</label>
                        <select className="form-select form-select-sm">
                            {product.size.map((size, index) => (
                                <option key={index} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                )}
                {product.color && product.color.length > 1 && (
                    <div className="mb-2">
                        <label className="form-label small text-muted">Color:</label>
                        <select className="form-select form-select-sm">
                            {product.color.map((color, index) => (
                                <option key={index} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>
                )}

                {product.size && product.size.length === 1 && (
                    <span className="badge bg-light text-dark me-1">Size: {product.size[0]}</span>
                )}

                {product.color && product.color.length === 1 && (
                    <span className="badge bg-light text-dark">Color: {product.color[0]}</span>
                )}
            </div></>
    )
}
