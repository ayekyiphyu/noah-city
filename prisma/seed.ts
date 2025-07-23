import { PrismaClient } from '../app/generated/prisma';

const prisma = new PrismaClient();

const seedData = async (): Promise<void> => {
    // Seed QuickLinks
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'New In', href: '/new-in' },
        { name: 'Clothing', href: '/clothing' },
        { name: 'Contact', href: '/contact' },
    ];
    
    // Seed HeaderStatus
    const headerStatuses = [
        { title: 'Free Shipping on Orders Over $50' },
        { title: 'New Collection Available Now' },
        { title: '20% Off Sale - Limited Time' },
    ];
    
    // Seed Users (optional - for testing)
    const users = [
        { email: 'admin@example.com', name: 'Admin User' },
        { email: 'test@example.com', name: 'Test User' },
    ];
    
    try {
        // Clear existing data (optional)
        await prisma.quickLink.deleteMany();
        await prisma.headerStatus.deleteMany();
        await prisma.user.deleteMany();
        
        // Seed new data
        await prisma.quickLink.createMany({ data: quickLinks });
        await prisma.headerStatus.createMany({ data: headerStatuses });
        await prisma.user.createMany({ data: users });
        
        console.log('✅ Database seeded successfully');
        console.log(`Created ${quickLinks.length} quick links`);
        console.log(`Created ${headerStatuses.length} header statuses`);
        console.log(`Created ${users.length} users`);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}

async function main() {
    try {
        console.log('🌱 Starting database seed...');
        await seedData();
    } catch (error) {
        console.error('💥 Seeding failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
        console.log('🔌 Disconnected from database');
    }
}

main();