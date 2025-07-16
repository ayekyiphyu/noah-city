'use client';

import { NavigationItem, SearchFilters } from "@/types/type";
import { Facebook, Filter, Instagram, Menu, Search, X } from "lucide-react";
import router from "next/router";
import { useEffect, useRef, useState } from 'react';

export default function MainHeader() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [filters, setFilters] = useState<SearchFilters>({
        category: 'all',
        priceRange: 'all',
        sortBy: 'newest'
    });
    const searchInputRef = useRef<HTMLInputElement>(null);

    const navigationItems: NavigationItem[] = [
        { name: 'HOME', href: '#home' },
        { name: 'NEW IN', href: '#new' },
        {
            name: 'CLOTHING',
            href: '#clothing',
            submenu: [
                { name: 'Top', href: '#clothing/top' },
                { name: 'Bottom', href: '#clothing/bottom' },
                { name: 'Family Set', href: '#clothing/family-set' }
            ]
        },
        { name: 'CONTACT', href: '#contact' },
        { name: 'ACCESSORIES', href: '#accessories' }
    ];

    // Close mobile menu when screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
                setActiveDropdown(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Focus search input when opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const dropdownRef = useRef<HTMLDivElement>(null)
    // Close dropdown when clicking outside for mobile is OK
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        if (activeDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setShowFilters(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
        console.log('Filters:', filters);
    };

    const handleFilterChange = (key: keyof SearchFilters, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearSearch = () => {
        setSearchQuery('');
        setFilters({
            category: 'all',
            priceRange: 'all',
            sortBy: 'newest'
        });
    };

    const handleSubmenuClick = (href: string) => {
        // Navigate to submenu item
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
        // You can add navigation logic here
        console.log('Navigating to:', href);
        router.push(href);
    };


    const toggleMobileDropdown = (itemName: string) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null); // Close any open dropdowns
        if (isSearchOpen) {
            setIsSearchOpen(false);
            setShowFilters(false);
        }
    };

    const toggleDropdown = (itemName: string, event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setActiveDropdown(activeDropdown === itemName ? null : itemName);
    };

    const handleNavClick = (href: string, hasSubmenu: boolean, event: React.MouseEvent) => {
        if (hasSubmenu) {
            event.preventDefault();
            return;
        }
        // Navigate to the link
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
    };
    return (
        <div>
            <header className="bg-white border-b border-gray-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Search Icon - Desktop */}
                        <div className="flex-1 flex justify-start">
                            <button
                                onClick={handleSearchClick}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5 text-gray-600 hover:text-gray-800" />
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="flex-1 flex justify-center">
                            <div className="text-center">
                                <h1 className="text-2xl font-light text-black tracking-wide font-bold">
                                    NOAH CITY
                                </h1>
                                <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">
                                    Lifestyle Boutique
                                </p>
                            </div>
                        </div>

                        {/* Desktop: Social Icons | Mobile: Burger Menu */}
                        <div className="flex-1 flex justify-end items-center space-x-4">
                            {/* Desktop Social Icons */}
                            <div className="hidden md:flex items-center space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <Facebook className="w-4 h-4 text-gray-600 hover:text-gray-800" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <Instagram className="w-4 h-4 text-gray-600 hover:text-gray-800" />
                                </a>
                            </div>

                            {/* Mobile Burger Menu */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-600" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Overlay */}
                {isSearchOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            {/* Search Form */}
                            <form onSubmit={handleSearch} className="space-y-4">
                                <div className="relative">
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Filter Toggle */}
                                <div className="flex items-center justify-between">
                                    <button
                                        type="button"
                                        onClick={() => setShowFilters(!showFilters)}
                                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                                    >
                                        <Filter className="w-4 h-4" />
                                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={clearSearch}
                                        className="text-sm text-gray-500 hover:text-gray-700"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                {/* Filters */}
                                {showFilters && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                                        {/* Category Filter */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Category
                                            </label>
                                            <select
                                                value={filters.category}
                                                onChange={(e) => handleFilterChange('category', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                            >
                                                <option value="all">All Categories</option>
                                                <option value="bottom">Bottom</option>
                                                <option value="outer">Outer</option>
                                                <option value="family-set">Family Set</option>
                                            </select>
                                        </div>

                                        {/* Price Range Filter */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price Range
                                            </label>
                                            <select
                                                value={filters.priceRange}
                                                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                            >
                                                <option value="all">All Prices</option>
                                                <option value="0-15000">Under 15,000 MMK</option>
                                                <option value="15000-25000">15,000 - 25,000 MMK</option>
                                                <option value="25000-35000">25,000 - 35,000 MMK</option>
                                                <option value="35000+">Over 35,000 MMK</option>
                                            </select>
                                        </div>

                                        {/* Sort By Filter */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Sort By
                                            </label>
                                            <select
                                                value={filters.sortBy}
                                                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                            >
                                                <option value="newest">Newest</option>
                                                <option value="price-low">Price: Low to High</option>
                                                <option value="price-high">Price: High to Low</option>
                                                <option value="popular">Most Popular</option>
                                                <option value="name">Name A-Z</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                )}
            </header>

            {/* Desktop Navigation */}
            <nav className="hidden md:block bg-white border-b border-gray-100 relative z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-12 py-4">
                        {navigationItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                ref={item.submenu ? dropdownRef : undefined}
                            >
                                <button
                                    onClick={(e) => {
                                        if (item.submenu) {
                                            toggleDropdown(item.name, e);
                                        } else {
                                            handleNavClick(item.href, false, e);
                                        }
                                    }}
                                    className="text-sm font-light text-gray-700 hover:text-[#6B7461] tracking-wide transition-all duration-300 flex items-center gap-1 py-2 px-3 rounded-md hover:bg-gray-50"
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <svg
                                            className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>

                                {/* Desktop Dropdown Menu */}
                                {item.submenu && activeDropdown === item.name && (
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-in slide-in-from-top duration-300">
                                        <div className="py-2">
                                            {item.submenu.map((subItem, index) => (
                                                <button

                                                    key={subItem.name}
                                                    onClick={() => handleSubmenuClick(subItem.href)}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#6B7461] transition-all duration-200"
                                                    style={{
                                                        animationDelay: `${index * 50}ms`
                                                    }}
                                                >
                                                    {subItem.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
                    <div className="px-4 py-6 space-y-6">
                        {/* Mobile Navigation Links */}
                        <nav className="space-y-4">
                            {navigationItems.map((item) => (
                                <div key={item.name}>
                                    {item.submenu ? (
                                        // Navigation item with submenu
                                        <div>
                                            <button
                                                onClick={() => toggleMobileDropdown(item.name)}
                                                className="flex items-center justify-between w-full text-base font-light text-gray-700 hover:text-[#6B7461] tracking-wide transition-colors py-2"
                                            >
                                                <span>{item.name}</span>
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>

                                            {/* Mobile Submenu */}
                                            {activeDropdown === item.name && (
                                                <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                                                    {item.submenu.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block text-sm text-gray-600 hover:text-[#6B7461] transition-colors py-1"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        // Regular navigation item
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-base font-light text-gray-700 hover:text-[#6B7461] tracking-wide transition-colors py-2"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Search */}
                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Search</h3>
                            <form onSubmit={handleSearch}>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        <Search className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Mobile Social Links */}
                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                                >
                                    <Facebook className="w-5 h-5" />
                                    <span className="text-sm">Facebook</span>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                                >
                                    <Instagram className="w-5 h-5" />
                                    <span className="text-sm">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}