import { StableBase} from '@baseapp/stable/stable/stable.base.model';

export class StableApiConstants {
    public static readonly autoSuggestService: any = {
        url: '/rest/stables/autosuggest',
        method: 'GET',
        showloading: true
    };
    public static readonly getBySid: any = {
        url: '/rest/stables/bysid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/stables/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/stables/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/stables/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/stables/',
        method: 'POST',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/stables/{sid}',
        method: 'GET',
        showloading: true
    };
}