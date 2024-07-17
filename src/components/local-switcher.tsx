'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'use-intl';

export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const pathname = usePathname(); // Get the current path

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);
        
        startTransition(() => {
            router.replace(newPathname);
        });
    };

    return (
        <label className="border-2 rounded lg:block sm:hidden">
            <select defaultValue={localActive} onChange={onSelectChange}>
                <option value="lv">lv</option>
                <option value="ru">ru</option>
            </select>
        </label>
    );

}