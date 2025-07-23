import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedFooterData = async (): Promise<void> => {
    const quickLinks = [
        { name: 'Home', href: '' },
        { name: 'New In', href: '' },
        { name: 'Clothing', href: '' },
        { name: 'Contact', href: '' },
    ];
    
    const categories = [
        { name: 'Top', href: '' },
        { name: 'Bottom', href: '' },
        { name: 'Family Sets', href: '' },
        { name: 'Sale Items', href: '' },
    ];
    
    try {
        await prisma.quickLink.createMany({ data: quickLinks });
        await prisma.category.createMany({ data: categories });
        console.log('Footer data seeded successfully');
    } catch (error) {
        console.error('Error seeding footer data:', error);
        throw error;
    }
}

async function main() {
    try {
        await seedFooterData();
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();